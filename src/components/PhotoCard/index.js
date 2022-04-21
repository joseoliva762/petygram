import React, { useEffect, useRef } from 'react';
import { CardWrapper, Anchor, ImageWrapper, Image, Button } from '@components/PhotoCard/styles';
import { AiOutlineHeart } from 'react-icons/ai';
const DEFAULT_IMAGE = 'https://source.unsplash.com/random';

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const [show, setShow] = React.useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(cardRef.current);
  }, []);

  return (
    <>
      <CardWrapper ref={cardRef}>
        {show && (
          <>
            <Anchor href={`/detail/${id}`}>
              <ImageWrapper>
                <Image src={src} alt={`card-${id}`} />
              </ImageWrapper>
            </Anchor>
            <Button>
              <div>
                <AiOutlineHeart size="24px" />
              </div>
              <p>{likes} Me gusta</p>
            </Button>
          </>
        )}
      </CardWrapper>
    </>
  );
};
