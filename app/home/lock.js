import React, { Component } from 'react'
import { logIn } from 'auth'
import store from 'store'


export default class Lock extends Component {
  componentDidMount() {
    store.dispatch(logIn())
  }

  render() {
    return (<div>Logging in...</div>)
  }
}