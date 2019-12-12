import React from "react";

import PreviewCompatibleImage from "./PreviewCompatibleImage";

import { matchHeight } from "../helpers/matchHeightHelper";

class Tab extends React.Component {
  state = {
    activeTab: ""
  };

  componentDidMount() {
    matchHeight("tab__content", true);

    this.setState({
      activeTab: 0
    });
  }

  selectTabCallback = activeTab => {
    this.setState({
      activeTab
    });
  };

  render() {
    const { tabList, content, isInverted } = this.props;

    return (
      <div className={`tab ${isInverted ? `is-inverted` : ``}`}>
        <div className="tab__button-wrapper">
          {tabList &&
            tabList.length > 0 &&
            tabList.map((item, i) => (
              <button
                key={i}
                className={`tab__button ${
                  this.state.activeTab === i ? `is-active` : ``
                  }`}
                onClick={() => this.selectTabCallback(i)}
              >
                {item}
              </button>
            ))}
        </div>
        <div className="tab__content-wrapper">
          {content &&
            content.length > 0 &&
            content.map((item, i) => (
              <div
                key={i}
                className={`tab__content ${
                  this.state.activeTab === i ? `is-active` : ``
                  }`}
              >
                {item.text &&
                  <div class="tab__content-col ">
                    <h2 className="tab__content-col-title">{tabList[i]}</h2>
                    <div className="tab__content-col-text">
                    <p>{item.text}</p>
                    </div>
                  </div>
                }
                {item.featuredImage &&
                  <div class="tab__content-col">
                    <PreviewCompatibleImage
                      imageInfo={item.featuredImage}
                    />
                  </div>
                }
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Tab;
