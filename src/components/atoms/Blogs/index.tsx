import * as React from "react";
import Slider from "react-slick";
import { data, DataBlogs } from "./data";
import { BlogsWrapper, Card, Description, List, Section, Title } from "./style";

export interface IBlogsProps {}

export const Item = (data: DataBlogs) => {
  return (
    <Card>
      <img src={data.image} alt="blog" />
      <div className="content">
        <div className="title">{data.title}</div>
        <div className="time">{data.time}</div>
      </div>
    </Card>
  );
};
export function Blogs(props: IBlogsProps) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section>
      <BlogsWrapper>
        <Title>From the blog</Title>
        <Description>
          Learn more about Lido, our technology, vision and validators
        </Description>
        <Slider {...settings}>
          {data.map((item, index) => {
            return <Item {...item} key={index} />;
          })}
        </Slider>
      </BlogsWrapper>
    </Section>
  );
}
