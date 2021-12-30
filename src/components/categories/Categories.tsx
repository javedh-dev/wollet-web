import React from "react";
import TranslucentCard from "../common/TranslucentCard";
import { Category, CategoryType } from "../../models/Category";
import {
  Badge,
  Button,
  Col,
  Collapse,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { CgAdd, CgRemove } from "react-icons/all";

type CategoriesProps = {
  categories?: Category[];
};

type CategoriesState = {
  addCategory: boolean;
};

export default class Categories extends React.Component<CategoriesProps,
    CategoriesState> {
  constructor(props: CategoriesProps) {
    super(props);
    this.state = {
      addCategory: false,
    };
  }

  render() {
    const amountFormatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return (
        <TranslucentCard className={"p-2 mt-4"}>
          <Row className={" p-0 m-0 border-bottom"}>
            <Col as={"h5"} className={"fw-bolder p-1"}>
              Categories
            </Col>
            <Col sm={1}>
              {!this.state.addCategory && (
                  <CgAdd
                      color={"darkgreen"}
                      size={"20"}
                      className={"cursor-pointer"}
                      onClick={() => this.setState({addCategory: true})}
                  />
              )}
              {this.state.addCategory && (
                  <CgRemove
                      color={"darkred"}
                      size={"20"}
                      className={"cursor-pointer"}
                      onClick={() => this.setState({addCategory: false})}
                  />
              )}
            </Col>
          </Row>

          <Collapse in={this.state.addCategory}>
            <div>
              <TranslucentCard className={"mt-2 "}>
                <Form>
                  <Row>
                    <Col>
                      <InputGroup className="mb-3" size={"sm"}>
                        <Form.Control
                            placeholder="Category Name"
                            size={"sm"}
                            className={"w-75"}
                        />
                        <Form.Control type={"color"} size={"sm"}/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className={"mt-2"}>
                    <Col>
                      <Form.Select size={"sm"} className={"shadow-none"}>
                        <option>Income</option>
                        <option>Expense</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <InputGroup size={"sm"}>
                        <InputGroup.Text>₹</InputGroup.Text>
                        <Form.Control
                            type={"number"}
                            placeholder="Budget"
                            size={"sm"}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <div className={"text-end mt-4"}>
                    <Button size={"sm"} variant={"success"}>
                      Add
                    </Button>
                    <Button
                        size={"sm"}
                        variant={"outline-danger"}
                        className={"ms-2"}
                        onClick={() => this.setState({addCategory: false})}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              </TranslucentCard>
            </div>
          </Collapse>

          <Table responsive borderless hover>
            <tbody>
            {this.props.categories?.map((category) => {
              return (
                  <tr key={category.id}>
                    <td>
                      <Badge
                          pill
                          bg={
                            category.categoryType === CategoryType.INCOME
                                ? "success"
                                : "danger"
                          }
                      >
                        {category.name}
                      </Badge>
                    </td>
                    <td className={"text-end"}>
                      {category.budget
                          ? amountFormatter.format(category.budget)
                          : "--"}
                    </td>
                  </tr>
              );
            })}
            </tbody>
          </Table>
        </TranslucentCard>
    );
  }
}
