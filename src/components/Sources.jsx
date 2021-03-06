import React from 'react';
import { Container } from '../components/Container';

export const Sources = ({ sources }) => (
  <section className="post__sources">
    <Container>
      <h2>Sources</h2>
      <ul className="post__sources-list">
        {sources.map(([link, title]) => (
          <li key={link}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
