import React from 'react'
import Layout from '../Layout'
import './index.css'

export default function Admin() {
    return (
        <Layout>
            <div className='adminContainer'>
              <div className="myform">
                <form>
                  <h2>Add a new project</h2>
                  <br/>
                  <br/>
                  <p>Project Name:</p>
                  <input
                    type="text"
                  />
                  <br/>
                  <br/>
                  <p>Project Description:</p>
                  <input
                    type="text"
                  />
                  <br/>
                  <br/>
                  <p>Repository URL:</p>
                  <input
                    type="text"
                  />
                  <br/>
                  <br/>
                  <input type='submit' />
                </form>
              </div>
            </div>
        </Layout>
    )
}