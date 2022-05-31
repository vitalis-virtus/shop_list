import { Formik, Field, Form} from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import styles from "./ListForm.module.css"

import {addShopItem} from "../../redux/actions/shopListActions"

// const ListForm = ({ handleSubmit }) => {
//   const initialFormValues = {
//     text: "",
//   };

//   const validationSchema = Yup.object({
//     text: Yup.string()
//       .min(2, "Too short!")
//       .max(50, "To long!")
//       .required("Required!")
//   });

//   return (
//     <section className={styles.formWrapper}>
//       <h1 className={styles.header}>ShopList</h1>
//       <Formik
//         initialValues={initialFormValues}
//         onSubmit={(values, actions) => {
//           handleSubmit({ text: values.text, id: uuidv4() });
//           actions.resetForm(initialFormValues)
//         }}
//         validationSchema={validationSchema}
//       >
//         <Form className={styles.form}>
//           {/* <label htmlFor="text">Item</label> */}
//           <Field id="text" name="text" placeholder="Buy..." 
//           className={styles.field} />
//           <button type="submit" className={styles.button}>Add</button>
//         </Form>
//       </Formik>
//     </section>
//   );
// };

// export default ListForm;

import { Component } from 'react'
import { connect} from "react-redux";

 class ListForm extends Component {
  render() {
  const initialFormValues = {
    text: "",
  };

  const {addShopitem} = this.props

  const validationSchema = Yup.object({
    text: Yup.string()
      .min(2, "Too short!")
      .max(50, "To long!")
      .required("Required!")
  });

  return (
    <section className={styles.formWrapper}>
      <h1 className={styles.header}>ShopList</h1>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values, actions) => {
          addShopitem(values.text);
          actions.resetForm(initialFormValues)
        }}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          {/* <label htmlFor="text">Item</label> */}
          <Field id="text" name="text" placeholder="Buy..." 
          className={styles.field} />
          <button type="submit" className={styles.button}>Add</button>
        </Form>
      </Formik>
    </section>
  );
  }
}

const mapDispatchToProps = (dispatch)=> ({
  addShopitem: text=>dispatch(addShopItem(text))
})

export default connect(null, mapDispatchToProps)(ListForm)
