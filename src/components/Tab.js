import React from "react";
import { matchHeight } from "../helpers/matchHeightHelper";

class Tab extends React.Component {
  state = {
    activeTab: ""
  };

  componentDidMount() {
    const { tabList } = this.props;

    matchHeight("tab__content");

    this.setState({
      activeTab: tabList[0].id
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
      <div className={`tab ${isInverted? `is-inverted` : ``}`}>
        <div className="tab__button-wrapper">
          {tabList &&
            tabList.length > 0 &&
            tabList.map((item, i) => (
              <button
                key={i}
                className={`tab__button ${
                  this.state.activeTab === item.id ? `is-active` : ``
                }`}
                onClick={() => this.selectTabCallback(item.id)}
              >
                {item.label}
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
                  this.state.activeTab === item.id ? `is-active` : ``
                }`}
              >
                <p>{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Tab;
