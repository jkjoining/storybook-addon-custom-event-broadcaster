import React, { useState, memo } from "react";
import PropTypes, { func } from "prop-types";

import { Button, Icons } from "@storybook/components";

import { FlexedBox, IconBox } from "../../styled-components/boxes";

import { StyledInput, StyledTextarea } from "../../styled-components/input";
import {
  StyledTableRow,
  StyledTableCell,
  StyledTableCellFirst,
} from "../../styled-components/table";

const fireEvent = (eventName: string, eventData: string, selector = "") => {
  const data = eventData || null;

  try {
    const parsedData = JSON.parse(data);

    const storyBookIframeDocument = document.getElementById(
      // the preview is inside a iframe
      "storybook-preview-iframe"
    ).contentWindow.document;

    if (selector.length > 0) {
      storyBookIframeDocument
        .querySelector(selector)
        .dispatchEvent(new CustomEvent(eventName, parsedData));
    } else {
      storyBookIframeDocument.dispatchEvent(
        new CustomEvent(eventName, parsedData)
      );
    }
  } catch (error) {
    console.log("Fire not successfull ", error); // eslint-disable-line no-console
  }
};

const CustomEventRow = memo(
  ({ selectorDefault = "", eventNameDefault = "", eventDataDefault = {} }) => {
    const [displaySelector, setDisplaySelector] = useState(false);
    const [selector, setSelector] = useState(selectorDefault);
    const [eventName, setEventName] = useState(eventNameDefault);
    const [eventData, setEventData] = useState(eventDataDefault);

    const displaySelectInput = () => {
      setDisplaySelector(true);
    };

    const handleSelectorChange = (event) => {
      setSelector(event.target.value);
    };

    const handleEventNameChange = (event) => {
      setEventName(event.target.value);
    };

    const handleDataChange = (event) => {
      setEventData(event.target.value);
    };

    return (
      <StyledTableRow>
        <StyledTableCellFirst>
          <StyledInput
            type="text"
            value={eventName}
            onChange={handleEventNameChange}
          />
        </StyledTableCellFirst>
        <StyledTableCell>
          <StyledTextarea value={eventData} onChange={handleDataChange} />
          </StyledTableCell>

        <StyledTableCell  style={{minWidth: 200}}>
          <PrettyPrintJsonAsList value={eventData} />
        </StyledTableCell>
        <StyledTableCell>
          <FlexedBox>
            {displaySelector === false && selector.length === 0 ? (
              [
                <IconBox key="iconBox" className="tooltip">
                  <Icons icon="add" onClick={displaySelectInput} />
                  <span tooltip="message">Add Selektor</span>
                </IconBox>,
              ]
            ) : (
              <StyledTextarea
                value={selector}
                onChange={handleSelectorChange}
              />
            )}
          </FlexedBox>
        </StyledTableCell>
        <StyledTableCell>
          <Button
          style={{margin: "0px 10px"}}
            variant="solid"
            onClick={() => fireEvent(eventName, eventData, selector)}
          >
            send
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  }
);

CustomEventRow.propTypes = {
  selectorDefault: PropTypes.string,
  eventNameDefault: PropTypes.string,
  eventDataDefault: PropTypes.string,
};

CustomEventRow.defaultProps = {
  selectorDefault: "",
  eventDataDefault: "",
};

export default CustomEventRow;

function PrettyPrintJsonAsList({ value }) {

  if (value.length === 0) {
    return null;
  }

  const data = JSON.parse(value);
  const keys = Object.keys(data);

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {keys.map((key) => (
        <li key={key}>
          {key}: {data[key]}
        </li>
      ))}
    </ul>
  );
}