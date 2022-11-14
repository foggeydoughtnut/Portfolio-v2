import { Show } from "solid-js";

const ProjectCard = (props) => {

  const navigateToPage = (webPage) => {
    window.open(webPage);
  }

  return (
    <div class="card lg:w-1/3 w-3/4 bg-base-100 shadow-xl h-auto">
      {/* <Show when={props.image}>
        <figure><img src={props.image} alt={props.image} class="content-center" /></figure>
      </Show> */}
      <figure><img src="/public/MyPicture.jpg" alt="/public/MyPicture.jpg" class="content-center" /></figure>
      <div class="card-body">
        <h2 class="card-title">{props.title}</h2>
        <p>{props.body}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onClick={() => navigateToPage(props.projectLink)}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;