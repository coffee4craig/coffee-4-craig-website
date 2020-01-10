import React from 'react';
import FaqCard from './FaqCard';

const Faq = ({ title, list }) => {
	title = 'Frequently Asked Questions';
	list = [
		{
			title: 'What are the opening hours?',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio?`,
		},
		{
			title: 'What are the opening hours?',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio?`,
		},
		{
			title: 'What are the opening hours?',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio?`,
		},
		{
			title: 'What are the opening hours?',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio?`,
		},
		{
			title: 'What are the opening hours?',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio?`,
		},
		{
			title: 'What are the opening hours?',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio?`,
		},
		{
			title: 'What are the opening hours?',
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione reiciendis, eveniet voluptate excepturi doloribus
    quam expedita quibusdam nam obcaecati? Voluptatibus at
    reprehenderit obcaecati nulla velit natus voluptatem nihil
    id distinctio?`,
		},
	];

	return (
		<div className='faq-container'>
			<h2 className='faq-title'>{title}</h2>
			{list.map(item => {
				return <FaqCard {...item} />;
			})}
		</div>
	);
};

export default Faq;
