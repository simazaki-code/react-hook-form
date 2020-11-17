import * as React from "react";
import {useForm} from "react-hook-form";
import { Form, Row, Col, Button, ButtonToolbar } from "react-bootstrap";

const MyForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState } = useForm();
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group as={Row} controlId={"name"}>
        <Form.Label column sm={2}>
          {"お名前"}
        </Form.Label>
        <Col sm={5}>
          <Form.Control
            name={"name"}
            placeholder={"Name"}
            type={"text"}
            ref={register({})}
          />
        </Col>
      </Form.Group>
      <Form.Group>
        <Col smOffset={2} sm={5}>
          <ButtonToolbar>
            <Button
              variant={"primary"}
              type="submit"
              disabled={!formState.dirty || formState.isSubmitting}
            >
              登録
            </Button>
            <Button
              variant={"secondary"}
              type="button"
              disabled={!formState.dirty || formState.isSubmitting}
              onClick={reset}
            >
              クリア
            </Button>
          </ButtonToolbar>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default MyForm;
