import React, { useState } from "react";
import s from "./Form.scss";
import withStyles from "isomorphic-style-loader/withStyles";
import { useHttp } from "../hooks/http.hook";

function OrdersForm() {
  const { request } = useHttp();
  const [modalEnabled, setModalEnabled] = useState(false);
  const [formEnabled, setFormEnabled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    goods: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    goods: "",
    quantity: "",
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const enableForm = () => {
    setFormEnabled(!formEnabled);
  };
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const data = await request("/api/request/order", "POST", {
        ...form,
      });
      if (data.errors) {
        return setErrors(data.errors);
      }
      setModalEnabled(true);
      setFormEnabled(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        goods: "",
        quantity: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        goods: "",
        quantity: "",
      });
    } catch (error) {}
  };
  return (
    <div className="container">
      <div className="header" onClick={enableForm}>
        <h3>сделать заказ</h3>
      </div>
      {formEnabled && (
        <form
          onSubmit={submitHandler}
          className={formEnabled ? "hidden" : "displaying"}
        >
          <div className="row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ваше имя.."
              value={form.name}
              onChange={changeHandler}
              className={errors.name === "" ? "notError" : "error"}
            />
            <span>{errors.name}</span>
          </div>
          <div className="row">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="ваш email.."
              value={form.email}
              onChange={changeHandler}
              className={errors.email === "" ? "notError" : "error"}
            />
            <span>{errors.email}</span>
          </div>
          <div className="row">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="ваш телефон.."
              value={form.phone}
              onChange={changeHandler}
              className={errors.phone === "" ? "notError" : "error"}
            />
            <span>{errors.phone}</span>
          </div>
          <div className="row">
            <select
              style={{ color: form.goods ? "black" : "gray" }}
              id="goods"
              name="goods"
              className={errors.goods === "" ? "notError" : "error"}
              onChange={changeHandler}
              placeholder="edwa"
            >
              <option style={{ display: "none" }} value="" hidden>
                выберите товар
              </option>
              <option value="бройлер_цыпленок">цыпленок бройлер</option>
              {/* <option value="бройлер_индюк">индюшка бройлер</option> */}
              <option value="яйца_куриные">куриные яйца</option>
              <option value="яйца_гусиные">гусиные яйца</option>
              {/* <option value="колбаса">колбасы и сосиски</option> */}
              {/* <option value="другое">прочее</option> */}
            </select>
            <span>{errors.goods}</span>
          </div>
          <div className="row">
            <input
              id="quantity"
              name="quantity"
              type="number"
              placeholder="введите кол-во товара"
              value={form.quantity}
              onChange={changeHandler}
              className={errors.quantity === "" ? "notError" : "error"}
            />
            <span>{errors.quantity}</span>
          </div>
          <div className="row">
            <input type="submit" value="подтвердить" />
          </div>
        </form>
      )}

      {modalEnabled && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalEnabled(false)}>
              &times;
            </span>
            <p>ваш заказ отправлен в обработку</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(s)(OrdersForm);
