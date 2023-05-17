import { Show } from "solid-js";

const ProjectCard = (props) => {

  const navigateToPage = (webPage) => {
    window.open(webPage);
  }

  return (
    <div class="card lg:w-1/3 w-3/4 bg-base-100 shadow-xl h-auto">
      <Show when={props.image}>
        <figure><img src={props.image} alt={props.image} class="content-center" /></figure>
      </Show>
      <div class="card-body">
        <h2 class="card-title">{props.title}</h2>
        <p>{props.body}</p>
        <Show when={props.projectLink}>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" onClick={() => navigateToPage(props.projectLink)}>Learn More</button>
          </div>
        </Show>
      </div>
    </div>
  )
}

export default ProjectCard;