import React from 'react'
import './notification.css'

export const showErrMsg = (msg) => {
    return (
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{msg}</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
}

export const showSuccessMsg = (msg) => {
    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{msg}</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
}