import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Card from "./Card";

import { connect } from "react-redux";

const MessagesOldest = ({
  messages,
  lastBookElementRef,
  notRepliedOn,
  ongoingOn,
  successOn,
  unseenOn,
  coldOn,
}) => {
  return (
    <div className='messages-admin'>
      {messages.length > 0 &&
        messages.map((element, index) => (
          <>
            {index % 2 === 0 && (
              <div
                className='one flex_middle'
                style={{ alignItems: "flex-start" }}
                key={index}
                data-aos='fade-in'
                data-aos-delay={100 * index}
                data-aos-offset={60}
                ref={index % 7 === 0 ? lastBookElementRef : null}
              >
                {element.status === "not-replied" && notRepliedOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "ongoing" && ongoingOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "success" && successOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "unseen" && unseenOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "cold" && coldOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
              </div>
            )}
            {index % 2 === 1 && (
              <div
                className='two flex_middle'
                style={{ alignItems: "flex-start" }}
                key={index}
                data-aos='fade-in'
                data-aos-delay={100 * index}
                data-aos-offset={60}
                ref={index % 7 === 0 ? lastBookElementRef : null}
              >
                {element.status === "not-replied" && notRepliedOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "ongoing" && ongoingOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "success" && successOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "unseen" && unseenOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "cold" && coldOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
              </div>
            )}
            {index % 2 === 2 && (
              <div
                className='three flex_middle'
                style={{ alignItems: "flex-start" }}
                key={index}
                data-aos='fade-in'
                data-aos-delay={100 * index}
                data-aos-offset={60}
                ref={index % 7 === 0 ? lastBookElementRef : null}
              >
                {element.status === "not-replied" && notRepliedOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "ongoing" && ongoingOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "success" && successOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "unseen" && unseenOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
                {element.status === "cold" && coldOn && (
                  <Card
                    name={element.name}
                    createdAt={element.createdAt}
                    message={element.message}
                    organisation={element.organisation}
                    messageId={element._id}
                    email={element.email}
                    status={element.status}
                    index={index}
                  />
                )}
              </div>
            )}
          </>
        ))}
    </div>
  );
};

MessagesOldest.propTypes = {
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.settings,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(MessagesOldest);
