interface ProjectCardProps {
    name: string;
    type?: string;
    tags: string[];
    img: string;
    alt: string;
    project_type: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, tags, img, alt, project_type, link }) => {
    return (
        <a className="standart-hover standart-animation" href={link} target="_blank" rel="noopener noreferrer">
            <div className="project-card w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] bg-dark-color-01 rounded-2xl overflow-hidden relative z-10 flex-centered flex-col gap-2 p-2">
                <img className="w-full h-full object-cover opacity-10 standart-animation absolute z-10" src={img} alt={alt} />
                <h3 className="z-20 text-xl lg:text-2xl">{name}</h3>
                <h4 className="z-20 text-[16px] lg:text-xl">{project_type}</h4>
                <div className="flex justify-center flex-wrap gap-1 z-20">
                    {tags.map(tag => <span className="text-[12px]" key={tag}>{tag}</span>)}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard