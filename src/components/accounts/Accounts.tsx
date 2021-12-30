import React from "react";
import TranslucentCard from "../common/TranslucentCard";
import { Account, AccountType } from "../../models/Account";
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

type AccountsProps = {
  accounts?: Account[];
};

type AccountsState = {
  addAccount: boolean;
};

export default class Accounts extends React.Component<
  AccountsProps,
  AccountsState
> {
  constructor(props: AccountsProps) {
    super(props);
    this.state = {
      addAccount: false,
    };
  }

  render() {
    const amountFormatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return (
      <TranslucentCard className={"p-2"}>
        <Row className={" p-0 m-0 border-bottom"}>
          <Col as={"h5"} className={"fw-bolder p-1"}>
            Accounts
          </Col>
          <Col sm={1}>
            {!this.state.addAccount && (
              <CgAdd
                color={"darkgreen"}
                size={"20"}
                className={"cursor-pointer"}
                onClick={() => this.setState({ addAccount: true })}
              />
            )}
            {this.state.addAccount && (
              <CgRemove
                color={"darkred"}
                size={"20"}
                className={"cursor-pointer"}
                onClick={() => this.setState({ addAccount: false })}
              />
            )}
          </Col>
        </Row>
        <Collapse in={this.state.addAccount}>
          <div>
            <TranslucentCard className={"mt-2 "}>
              <Form>
                <Row>
                  <Col>
                    <InputGroup className="mb-3" size={"sm"}>
                      <Form.Control
                        placeholder="Account Name"
                        size={"sm"}
                        className={"w-75"}
                      />
                      <Form.Control type={"color"} size={"sm"} />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className={"mt-2"}>
                  <Col>
                    <Form.Select
                      size={"sm"}
                      className={"shadow-none"}
                      defaultValue={""}
                      required
                    >
                      <option value="">Account Type</option>
                      {Object.values(AccountType).map((accountType) => (
                        <option key={accountType}>{accountType}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <InputGroup size={"sm"}>
                      <InputGroup.Text>₹</InputGroup.Text>
                      <Form.Control
                        type={"number"}
                        placeholder="Initial Balance"
                        size={"sm"}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className={"mt-2"}>
                  <Col>
                    <Form.Check
                      className={"shadow-none"}
                      type={"checkbox"}
                      label={"Include in balance"}
                    />
                  </Col>
                </Row>
                <div className={"text-end mt-2"}>
                  <Button size={"sm"} variant={"success"}>
                    Add
                  </Button>
                  <Button
                    size={"sm"}
                    variant={"outline-danger"}
                    className={"ms-2"}
                    onClick={() => this.setState({ addAccount: false })}
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
            {this.props.accounts?.map((account) => {
              return (
                <tr key={account.id}>
                  <td>
                    {account.name}{" "}
                    <Badge pill bg={"secondary"}>
                      {account.accountType}
                    </Badge>
                  </td>
                  <td className={"text-end"}>
                    {amountFormatter.format(account.initialBalance)}
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
