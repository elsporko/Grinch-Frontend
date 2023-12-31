import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handlChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        const {toggle, onSave } = this.props;

        return(
            <Modal isOpen={true} toggle={toggle}>
              <ModalHeader toggle={toggle}> Todo Item</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for="todo-title">Title</Label>
                    <Input
                      type="text"
                      id="todo-title"
                      name="title"
                      value={this.state.activeItem.title}
                      onChange={this.handleChange}
                      placeholder="Enter Todo text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="todo-description">Title</Label>
                    <Input
                      type="text"
                      id="todo-description"
                      name="description"
                      value={this.state.activeItem.description}
                      onChange={this.handleChange}
                      placeholder="Enter Todo description"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label check>
                    <Input
                      type="checkbox"
                      name="completed"
                      value={this.state.activeItem.completed}
                      onChange={this.handleChange}
                      placeholder="Enter Todo Text"
                    />
                    Completed
                    </Label>
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  onclick={() => onSave(this.state.activeItem)}
                >
                  Save
                </Button>
              </ModalFooter>
            </Modal>
        );
    }
}

