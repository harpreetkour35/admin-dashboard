import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CFormGroup,
  CLabel,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupAppend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  thunk_action_creator,
  action_creater,
} from "../../actions/fetchAction";

const URL = "http://localhost:3000/api/products";
const fields = ["name", "description", "price"];

function Products(props) {
  const data = useSelector((state) => state.data.userData);
  console.log(data);
  const dispatch = useDispatch();
  let products = Object.values(data);

  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [modal, setModal] = useState(false);

  const resetForm = () => {
    setName("");
    setPrice("");
    setDescription("");
  };

  const addProducts = () => {
    const data = {
      name: name,
      price: price,
      description: description,
    };
    dispatch(action_creater(data));
    resetForm();
    toggle();
  };

  const toggle = () => {
    resetForm();
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(thunk_action_creator());
  }, []);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Product List</CCardHeader>
          <CCardBody>
            <CButton
              color="success"
              className="mt-3"
              active
              tabIndex={-1}
              onClick={toggle}
              className="mr-1"
            >
              Add New
            </CButton>
            <CModal show={modal} onClose={toggle}>
              <CModalHeader closeButton>Add Product</CModalHeader>
              <CModalBody>
                <CFormGroup>
                  <CLabel htmlFor="name">Name</CLabel>
                  <CInput
                    id="name"
                    placeholder="Enter product name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <CLabel htmlFor="price">Price</CLabel>
                  <CCol md="12">
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-euro" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        id="price"
                        placeholder="Enter product price"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <CInputGroupAppend>
                        <CInputGroupText>.00</CInputGroupText>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                  <CLabel htmlFor="description">Description</CLabel>
                  <CInput
                    id="description"
                    placeholder="Enter product description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={addProducts}>
                  Add
                </CButton>{" "}
                <CButton color="secondary" onClick={toggle}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
            <CDataTable
              items={products}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              clickableRows
              onRowClick={(item) => history.push(`/products/${item._id}`)}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Products;
