import { css } from "lit-element";

export const style = css`
  .wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .radio-box {
    width: 150px;
    border-radius: 10px;
    background-color: #eeeeee;
    float: left;
    margin-right: 20px;
    padding: 8px;
    margin-top: 15px;
  }

  .radio {
    width: auto;
    background-color: transparent;
    margin-right: 0;
  }

  .radio-box-child .radio-box {
    margin-left: -8px;
    border-radius: 0px;
    position: relative;
    z-index: 999;
    height: 40px;
    padding-top: 20px;
    margin-top: 5px;
  }
  .radio-box:first-child
    .radio-box-child
    .radio-box-child-2
    .radio-box {
    margin-left: 310px;
  }
  .radio-box-child .radio-box:last-child {
    border-radius: 0 0 10px 0;
  }
  .radio-box-child-2 {
    margin-left: -170px;
    margin-top: -45px;
  }
  .radio-box-child-2 .radio-box {
    width: 170px;
    height: 45px;
    padding: 10px;
    border-radius: 0px;
  }
  .radio-box-child-2 .radio-box:first {
    border-radius: 100px 0 0 0;
  }
  .radio-box-child-2 .radio-box:last-child {
    border-radius: 0 0 0 10px;
  }
  .radio-box:first-child
    .radio-box-child
    .radio-box-child-2
    .radio-box:last-child {
    border-radius: 0 0 10px 0;
  }
  .radio-button {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 0px;
    text-align: left;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .radio-box label {
    font-size: 16px;
    color: #505050;
    font-weight: normal;
    font-family: 'Roboto-Condensed';
  }
  /* Hide the browser's default radio button */
  .radio-button input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .radio-button .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border: 1px solid #dfe0e1;
    border-radius: 50%;
  }
  .radio-button .addition {
    position: absolute;
    margin-top: -45px;
    margin-left: 10px;
    font-size: 14px;
  }

  /* When the radio button is checked */
  .radio-button input:checked ~ .checkmark {
    background-color: #dfe0e1;
  }
  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .radio-button input:checked ~ .checkmark:after {
    display: block;
  }
  /* Style the indicator (dot/circle) */
  .radio-button .checkmark:after {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #505050;
  }
`;
