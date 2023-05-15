import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function TutorTimeline(args) {
  return (
    <div class='grey-div'>
      <h1 class='tutoring-title'>How Do I Start?</h1>
      <h4 class='tutoring-subtitle'>
        Learn about the ways to setup a tutoring session.
      </h4>
      <Timeline className='timeline' position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1 class='tutoring-title'>Contact Us</h1>
            <p>
              Either send an email to jarrett@bytescholars.com or sign up for an
              account on <a href='https://is.gd/9J9XDf'>Wyzant</a> to schedule
              your first session. Feel free to include available times, subjects
              needed, and the session length in your message.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1 class='tutoring-title'>Session Details</h1>
            <p>
              I will personally reach out to confirm any details about the
              session either through email or Wyzant. If you need any special
              requests, please feel free to let me know and I will be sure to
              accomodate.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1 class='tutoring-title'>Tutoring Session</h1>
            <p>
              Using the Wyzant online platform, I will set up a session for you
              to join. I have experience using different methods of teaching
              that are most effective for the content you need help with.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <h1 class='tutoring-title'>Finished</h1>
            <p>
              You were able to finish that homework assignment or ace that
              difficult test so it's time to celebrate. After finishing your
              first session, we can arrange repeating sessions based on your
              schedule.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TutorTimeline;
