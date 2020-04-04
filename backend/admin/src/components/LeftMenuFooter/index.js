/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import { PropTypes } from "prop-types";
import Wrapper from "./Wrapper";
import messages from "./messages.json";

defineMessages(messages);

const LeftMenuFooter = () => {
  return (
    <Wrapper>
      <div className="poweredBy">
        © Copyright Click & Farm sp. z o. o .
      </div>
    </Wrapper>
  );
};

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
