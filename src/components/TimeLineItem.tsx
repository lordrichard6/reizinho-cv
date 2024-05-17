interface Project {
    name: string;
    link: string;
}

interface TimelineData {
    color: string;
    role: string;
    year: string;
    website: string;
    company: string;
    description: string;
    projects?: Project[];
}

interface TimelineItemProps {
    data: TimelineData;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag rounded-lg" style={{ background: data.color }}>
                {data.role}
            </span>
            <time>{data.year}</time>
            <a className="hover:underline" href={data.website} target="_blank" rel="noopener noreferrer"><h4>{data.company}</h4></a>
            <p className="text-sm lg:text-lg">{data.description}</p>
            {data.projects && (
                <div className="">
                    <span className="text-lg lg:text-xl font-light">My Projects:</span>
                    <div className="flex flex-col">
                        {data.projects.map((project) => (
                            <a
                                key={project.name}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold hover:underline"
                            >
                                - {project.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem