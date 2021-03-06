/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import { get, upperFirst } from "lodash";
import { auth } from "strapi-helper-plugin";
import PageTitle from "../../components/PageTitle";

import { Block, Container, P, Wave } from "./components";

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const hasAlreadyCreatedContentTypes =
    get(
      plugins,
      ["content-manager", "leftMenuSections", "0", "links"],
      []
    ).filter((contentType) => contentType.isDisplayed === true).length > 1;

  const headerId = hasAlreadyCreatedContentTypes
    ? "HomePage.greetings"
    : "app.components.HomePage.welcome";
  const username = get(auth.getUserInfo(), "username", "");

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Block>
              <Wave />
              <FormattedMessage
                id={headerId}
                values={{
                  name: upperFirst(username),
                }}
              >
                {(msg) => <h2 id="mainHeader">{msg}</h2>}
              </FormattedMessage>
              <FormattedMessage id="app.components.HomePage.welcomeBlock.content.again">
                {() => <P>Clic & Farm is happy to see you! You'll find in your admin panel all functionalities to support the farmer community. 
If you need any help, our hotline is open 24/7, at the number +48 111 222 333</P>}
              </FormattedMessage>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
