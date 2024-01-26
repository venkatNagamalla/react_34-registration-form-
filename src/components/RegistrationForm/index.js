// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isFormSubmitted: false,
    onFirstNameBlur: false,
    onLastNameBlur: false,
    firstName: '',
    lastName: '',
  }

  onFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({onFirstNameBlur: true})
    } else {
      this.setState({onFirstNameBlur: false})
    }
  }

  onLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({onLastNameBlur: true})
    } else {
      this.setState({onLastNameBlur: false})
    }
  }

  firstNameText = event => {
    this.setState({firstName: event.target.value})
  }

  lastNameText = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstName = () => {
    const {onFirstNameBlur, firstName} = this.state
    let input = `input-element`
    if (onFirstNameBlur) {
      input = `input-element input-blur`
    }

    return (
      <div className="name-container">
        <label className="label-element" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          value={firstName}
          onChange={this.firstNameText}
          onBlur={this.onFirstName}
          placeholder="First name"
          className={input}
          type="text"
          id="firstName"
        />
        {onFirstNameBlur && <p className="required">Required</p>}
      </div>
    )
  }

  renderLastName = () => {
    const {onLastNameBlur, lastName} = this.state

    let input = `input-element`
    if (onLastNameBlur) {
      input = `input-element input-blur`
    }

    return (
      <div className="name-container">
        <label className="label-element" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          value={lastName}
          onChange={this.lastNameText}
          onBlur={this.onLastName}
          placeholder="Last name"
          className={input}
          type="text"
          id="lastName"
        />
        {onLastNameBlur && <p className="required">Required</p>}
      </div>
    )
  }

  submitAnotherRes = () => {
    this.setState({isFormSubmitted: false, firstName: '', lastName: ''})
  }

  onSubmitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({onFirstNameBlur: true, onLastNameBlur: true})
    } else if (lastName === '') {
      this.setState({onLastNameBlur: true})
    } else if (firstName === '') {
      this.setState({onFirstNameBlur: true})
    }
  }

  renderRegistrationForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      {this.renderFirstName()}
      {this.renderLastName()}
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  )

  renderSuccessForm = () => (
    <div className="success-container">
      <img
        className="success-img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submit-success-text">Submitted Successfully</p>
      <button
        className="submit-res-btn"
        type="button"
        onClick={this.submitAnotherRes}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="registration-heading">Registration</h1>
        <div className="inner-container">
          {isFormSubmitted
            ? this.renderSuccessForm()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
