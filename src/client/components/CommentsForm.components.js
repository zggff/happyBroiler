import React, { useState } from "react";
import s from "./Form.scss";
import withStyles from "isomorphic-style-loader/withStyles";
import { useHttp } from "../hooks/http.hook";

const CommentsForm = () => {
  const { request } = useHttp();
  const [modalEnabled, setModalEnabled] = useState(false);
  const [formEnabled, setFormEnabled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      const data = await request("/api/request/comment", "POST", {
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
        subject: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        subject: "",
      });
    } catch (error) {}
  };
  return (
    <div className="container">
      <div className="header" onClick={enableForm}>
        <h3>оставьте свой отзыв</h3>
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
            <textarea
              id="subject"
              name="subject"
              placeholder="введите текст сообщения.."
              style={{ height: "100px" }}
              value={form.subject}
              onChange={changeHandler}
              className={errors.subject === "" ? "notError" : "error"}
            ></textarea>
            <span>{errors.subject}</span>
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
            <p>спасибо за ваш отзыв</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default withStyles(s)(CommentsForm);
