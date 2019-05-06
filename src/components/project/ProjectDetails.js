import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title {id} </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            recusandae quia sunt cumque excepturi nesciunt doloremque sapiente
            deserunt eligendi nulla, labore eos beatae quibusdam, ab pariatur
            necessitatibus dolor, itaque unde!
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by AJSpeller</div>
          <div>May 5th, 11:35pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
