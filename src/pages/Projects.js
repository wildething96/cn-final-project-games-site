import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";
import GamesInfo from "../assets/data/games";
import GameItem from "../components/GameItem";

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

const SerachSvg = styled(MdSearch)`
  margin: 0 -2rem 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Projects = () => {
  const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(GamesInfo);
  useEffect(() => {
    if (searchText === "") return;
    setProjectsData(() =>
      GamesInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(GamesInfo);
    }
  };
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Games page"
            subheading="Play classic arcade games"
          />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Games Name"
              />
              <SerachSvg className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <GameItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
};
