import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const [imgName] = src.split(".");
  const srcSetAvif = `${imgName}.avif 1x, ${imgName}@2x.avif 2x, ${imgName}@3x.avif 3x`;
  const srcSetJpg = `${imgName}@2x.jpg 2x, ${imgName}@3x.jpg 3x`;
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={srcSetAvif}></source>
          <Image src={src} srcSet={srcSetJpg} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
