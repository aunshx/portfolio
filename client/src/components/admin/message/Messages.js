import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import useWindow from "react-window-size-simple";

import Card from './Card'

import { connect } from 'react-redux'

const Messages = ({
  messages,
  lastBookElementRef,
  notRepliedOn,
  ongoingOn,
  successOn,
  unseenOn,
  coldOn,
}) => {
  const { width } = useWindow()
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
                data-aos={width < 400 ? '' : 'fade-up'}
                data-aos-delay={width < 768 ? 50 * index : 100 * index}
                data-aos-offset={width < 768 ? 20 : 60}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
                  />
                )}
              </div>
            )}
            {index % 2 === 1 && (
              <div
                className='two flex_middle'
                style={{ alignItems: "flex-start" }}
                key={index}
                data-aos={width < 400 ? '' : 'fade-up'}
                                data-aos-delay={width < 768 ? 50 * index : 100 * index}
                data-aos-offset={width < 768 ? 20 : 60}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
                  />
                )}
              </div>
            )}
            {index % 2 === 2 && (
              <div
                className='three flex_middle'
                style={{ alignItems: "flex-start" }}
                key={index}
                data-aos={width < 400 ? '' : 'fade-up'}
                                data-aos-delay={width < 768 ? 50 * index : 100 * index}
                data-aos-offset={width < 768 ? 20 : 60}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
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
                    comment={element.comment}
                  />
                )}
              </div>
            )}
          </>
        ))}
    </div>
  );
};

Messages.propTypes = {
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.settings,
});

const mapStateToActions = {
};

export default connect(mapStateToProps, mapStateToActions)(Messages);