// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {imageId: 0}

  onRightbutton = () => {
    const {imageId} = this.state
    const {reviewsList} = this.props

    if (imageId < reviewsList.length - 1) {
      this.setState(prevState => ({
        imageId: prevState.imageId + 1,
      }))
    }
  }

  onLefttbutton = () => {
    const {imageId} = this.state

    if (imageId > 0) {
      this.setState(prevState => ({
        imageId: prevState.imageId - 1,
      }))
    }
  }

  render() {
    const {imageId} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[imageId]
    return (
      <div className="bg-background">
        <div className="all-reveiw">
          <h1 className="review-head">Reviews</h1>
          <div className="inner-container">
            <button
              type="button"
              className="add-button"
              onClick={this.onLefttbutton}
              testid="leftArrow"
            >
              <img
                className="arrow-symbel"
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <div className="review-container">
              <img src={imgUrl} alt={username} />
              <p className="heading">{username}</p>
              <p>{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="add-button"
              onClick={this.onRightbutton}
              testid="rightArrow"
            >
              <img
                className="arrow-symbel"
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
