import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CIcon } from "@coreui/icons-react";

const URL = "http://localhost:3000/api/products";

function Product({ match }) {
  const history = useHistory();

  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //get product
  const getSingleData = async (id) => {
    const response = await axios.get(`${URL}/${id}`);
    setProduct(response.data);
  };

  //delete product
  const deleteData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => console.log(res));
    // const filteredProducts = products.filter((product) => id !== product._id);
    // setProducts(filteredProducts);
    history.goBack();
  };

  //edit product
  const editData = (id) => {
    console.log(id);
    axios
      .put(`${URL}/${id}`, {
        name: name,
        price: price,
        description: description,
      })
      .then((res) => setProduct(res.data));
    toggle();
  };

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    getSingleData(match.params.id);
  }, []);

  const productDetails = product
    ? Object.entries(product)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>Product id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {productDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <CButton
              color="primary"
              className="mt-3"
              active
              tabIndex={-1}
              onClick={() => history.goBack()}
            >
              Back
            </CButton>
            <CButton
              color="success"
              className="mt-3"
              active
              tabIndex={-1}
              onClick={toggle}
            >
              Edit
            </CButton>
            <CModal show={modal} onClose={toggle}>
              <CModalHeader closeButton>Edit Product</CModalHeader>
              <CModalBody>
                <CFormGroup>
                  <CLabel htmlFor="name">Name</CLabel>
                  <CInput
                    id="name"
                    placeholder={product.name}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <CLabel htmlFor="price">Price</CLabel>
                  <CInput
                    id="price"
                    placeholder={product.price}
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <CLabel htmlFor="description">Description</CLabel>
                  <CInput
                    id="description"
                    placeholder={product.description}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => editData(product._id)}>
                  Update
                </CButton>{" "}
                <CButton color="secondary" onClick={toggle}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
            <CButton
              color="danger"
              className="mt-3"
              active
              tabIndex={-1}
              onClick={() => deleteData(match.params.id)}
            >
              Delete
            </CButton>
            <CIcon name="cil-list" size="2xl" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Product;
