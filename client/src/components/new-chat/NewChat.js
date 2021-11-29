import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
z-index:20;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;










const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #46516e;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: #000000;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  background-color: #00bfa6;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #000000;
  font-size: 17px;
  
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #d9d9d9	;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: #ff7463;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

const NewChat = ({ showChat, setShowChat }) => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showChat) {
        setShowChat(false);
        console.log('I pressed');
      }
    },
    [setShowChat, showChat]
  );



  const socketRef = useRef();

  useEffect(() => {

    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    })
   // document.addEventListener('keydown', keyPress);
  //  return () => document.removeEventListener('keydown', keyPress);

  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    console.log(message)
    console.log(yourID)
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showChat ? 1 : 0,
    transform: showChat ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowChat(false);
    }
  };






  return (
    <>
      {showChat ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showChat={showChat}>
      <Container>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow key={index}>
                <MyMessage>
                  {message.body}
                </MyMessage>
              </MyRow>
            )
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>
                {message.body}
              </PartnerMessage>
            </PartnerRow>
          )
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
        <Button>Send</Button>
      </Form>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowChat(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>

  );
};

export default NewChat;
