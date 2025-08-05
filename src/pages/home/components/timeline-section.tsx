import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline'

const timelineItems = [
  {
    id: 1,
    date: 'Mar 2020',
    title: 'Entered KAIST IP-CEO Program',
    description:
      'Applied and accepted to KAIST IP-CEO Program, 2-year program specializing in intellectual property and entrepreneurship.',
  },
  {
    id: 2,
    date: 'Oct 2021',
    title: 'NutriCheck - Awarded by the Minister of Science and ICT',
    description:
      'Granted special award in the National Student Science Invention Contest, for researching and developing AI-based application for nutrition analysis experiment.',
  },
  {
    id: 3,
    date: 'Feb 2022',
    title: 'Graduated from KAIST IP-CEO Program',
    description:
      'Graduated from KAIST IP-CEO Program as 11th, for having 757+ hours of education regarding entrepreneurship and filed 5 patent applications.',
  },
  {
    id: 4,
    date: 'Mar 2022',
    title: 'Entered Daejeon Dongsin Science High School',
    description:
      'Applied to the school and successfully enrolled in the prestigious science program, specializing in advanced scientific research and experimentation.',
  },
  {
    id: 5,
    date: 'Apr 2022',
    title: 'Scholarship student at Doosan Yonkang Foundation',
    description:
      'Selected as scholarship student at Doosan Yonkang Foundation, being recognized for research skills in the field of science and technology.',
  },
  {
    id: 6,
    date: 'Sep 2023',
    title:
      'Cydial - Presentation at the Astronomical Workshop and Sundial Conference',
    description:
      'Presented about the development of a smart sundial using cycloid and physical computing in academic conference.',
  },
  {
    id: 7,
    date: 'Nov 2023',
    title: 'Cydial - Awarded by the Minister of Science and ICT',
    description:
      'Granted excellence award in the National Science Fair, for researching and developing smart sundial using cycloid and physical computing.',
  },
  {
    id: 8,
    date: 'Jan 2025',
    title: 'Graduated from Daejeon Dongsin Science High School',
    description:
      'Graduated from Daejeon Dongsin Science High School, completing advanced studies in science and technology.',
  },
  {
    id: 9,
    date: 'Feb 2025',
    title: 'Entered Gwangju Institute of Science and Technology (GIST)',
    description:
      'Applied and accepted to Gwangju Institute of Science and Technology (GIST), pursuing advanced studies in science and technology.',
  },
]

function TimelineSection() {
  return (
    <Timeline defaultValue={9}>
      {timelineItems.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default TimelineSection
