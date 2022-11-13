
const ProjectCard = (props) => {

  const navigateToPage = (webPage) => {
    console.log("this was clled")
    window.location = webPage
  }

  return (
    <div class="card w-1/3 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{props.title}</h2>
        <p>{props.body}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onClick={() => window.open(props.projectLink, '_blank')}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;