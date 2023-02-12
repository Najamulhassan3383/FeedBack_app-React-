import React from 'react'
import Card from '../components/shared/Card'
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This app is created in React.js for leaving a review on any service or product</p>
            <p>version 1.0.0</p>

            <p>
                <Link to = "/">Back To Home</Link>
            </p>
        </div>
      
    </Card>
  )
}
