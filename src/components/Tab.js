import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

import { matchHeight } from '../helpers/matchHeightHelper';

class Tab extends React.Component {
	state = {
		activeTab: '',
		currentRange: 1,
	};

	componentDidMount() {
		// matchHeight('tab__content', true);
		this.setState({
			activeTab: 0,
		});
	}

	handleInputChange = (e, activeTab) => {
		this.setState({
			currentRange: parseInt(e.target.value),
		});
		this.selectTabCallback(parseInt(e.target.value - 1));
	};

	selectTabCallback = activeTab => {
		this.setState({
			activeTab,
			currentRange: activeTab + 1,
		});
	};
	render() {
		const { tabList, content, isInverted } = this.props;

		return (
			<div className={`tab ${isInverted ? `is-inverted` : ``}`}>
				<div
					className={
						isInverted
							? 'tab__button-wrapper tab__button-wrapper-inverted'
							: 'tab__button-wrapper'
					}
				>
					{tabList &&
						tabList.length > 0 &&
						tabList.map((item, i) => (
							<button
								key={i}
								className={`tab__button ${
									this.state.activeTab === i
										? `is-active`
										: ``
								}`}
								onClick={() => this.selectTabCallback(i)}
							>
								{item}
							</button>
						))}
				</div>
				<div
					className={
						isInverted
							? 'tab__range-wrapper tab__range-wrapper-inverted'
							: 'tab__range-wrapper'
					}
				>
					<input
						className={'tab__range-selector'}
						type='range'
						min='1'
						step='1'
						max={tabList.length}
						value={this.state.currentRange}
						onChange={e => this.handleInputChange(e)}
					/>
				</div>
				<div
					className={`${
						isInverted
							? 'tab__content-wrapper tab__content-wrapper-inverted'
							: 'tab__content-wrapper'
					}`}
				>
					{content &&
						content.length > 0 &&
						content.map((item, i) => (
							<div
								key={i}
								className={`tab__content ${
									this.state.activeTab === i
										? `is-active`
										: ``
								}`}
							>
								{item.text && (
									<div class='tab__content-col '>
										{/* <h2 className='tab__content-col-title'>
											{tabList[i]}
										</h2> */}
										<div className='tab__content-col-text'>
											<p>{item.text}</p>
										</div>
									</div>
								)}
								{item.featuredImage && (
									<div class='tab__content-col'>
										<PreviewCompatibleImage
											imageInfo={item.featuredImage}
										/>
									</div>
								)}
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default Tab;
