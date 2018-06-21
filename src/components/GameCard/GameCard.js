import React from "react";
import "./GameCard.css";
import images from "../../image.json"
import Title from "../Title";

class GameCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      imageIdArray: [],
      topScore: 0,
      images

    }

  }
  handleImageClick = (event) => {

    if (!this.state.imageIdArray.includes(event.currentTarget.dataset.id)) {
      this.setState({
        count: this.state.count + 1,
        topScore:this.state.topScore,
        imageIdArray: [...this.state.imageIdArray, event.currentTarget.dataset.id],
        image: this.shuffelImages(this.state.images)

      });
      if (this.state.topScore < this.state.count) {
        this.setState({ topScore: this.state.count });
      }

    } else {
      this.setState({
        count: 0,
        imageIdArray: []
      });
    }
    this.forceUpdate();
  }
  shuffelImages = (image) => {
    var j, x, i;
    for (i = image.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = image[i];
      image[i] = image[j];
      image[j] = x;
    }
    return image;
  }
  render() {
    
      <Title count={this.setState.count} topScore={this.state.topScore} />
      return (
      <div className="div">
        <span >
          {this.state.images.map(item => (
            <div className="card">
              <div className="img-container" >
                <img
                  alt={item.alt}
                  key={item.id}
                  data-id={item.id}
                  src={item.image}
                  onClick={this.handleImageClick}
                />
              </div>

            </div >
          ))}
        </span>
      </div>
    );
  }
}
export default GameCard;
