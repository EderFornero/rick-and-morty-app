import React from "react";
import "../App.css";
//styled
import styled from "styled-components";
//components
import Profile from "./Images/perfil.jpeg";
import GitSvg from "./Svg/GitSvg";
import LinkSvg from "./Svg/LinkSvg";

function About() {
  return (
    <>
      <div className="detail-div">
        <Div>
          <div>
            <Me>About me</Me>
            <Img src={Profile} alt="Me" />
            <Social>
              <div className="git-svg">
                <a
                  href="https://github.com/EderFornero"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitSvg />
                </a>
              </div>

              <div className="link-svg">
                <a
                  href="https://www.linkedin.com/in/eder-fornero/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkSvg />
                </a>
              </div>
            </Social>
          </div>

          <div>
            <Name>Eder Fornero</Name>
            <Desc>
              <p>Rol:</p> <Paragraph>Web Developer</Paragraph>
            </Desc>
            <Desc>
              <p>Age:</p> <Paragraph>20</Paragraph>
            </Desc>
            <Desc>
              <p>Birthday:</p> <Paragraph>24/04</Paragraph>
            </Desc>
            <Desc>
              <p>Email:</p> <Paragraph>ederfornero.ef@gmail.com</Paragraph>
            </Desc>
            <Desc>
              <p>From:</p> <Paragraph>Arroyito, Córdoba. Argentina</Paragraph>
            </Desc>
            <Desc>
              <p>Portfolio:</p>{" "}
              <Paragraph>
                <a 
                  href="https://portfolio-master-eder-manuel-fornero.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >Eder's Portfolio</a>
              </Paragraph>
            </Desc>
          </div>
        </Div>
      </div>
    </>
  );
}

export default About;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  min-height: 500px;
  margin: 15px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background: rgb(34, 193, 195);
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 1) 0%,
    rgba(5, 6, 45, 1) 100%,
    rgba(253, 187, 45, 1) 100%
  );
  border-radius: 20px;
  -webkit-box-shadow: 21px 12px 6px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 21px 12px 6px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 21px 12px 6px -2px rgba(0, 0, 0, 0.75);
`;

const Name = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #f5f5dc;
  border-bottom: black 2px outset;
  border-right: black 2px outset;
`;

const Desc = styled.h2`
  text-align: center;
  color: #dcdcdc;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  p {
    padding: 0;
    margin: 0;
    margin-left: 5px;
  }
`;

const Img = styled.img`
  -webkit-box-shadow: 21px 12px 6px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 21px 12px 6px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 21px 12px 6px -5px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  min-width: 400px;
  max-height: 400px;
  object-fit: cover;
`;

const Me = styled.h3`
  text-align: center;
  color: #fff;
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  margin-left: 5px;
  color: #f5f5dc;
  a{
    color: #dcdcdc;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
`;
