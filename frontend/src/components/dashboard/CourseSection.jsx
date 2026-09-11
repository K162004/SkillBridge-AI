function CourseSection({ courses = [] }) {

  if (!courses.length) return null;

  return (
    <div className="bg-emerald-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        📚 Course Recommendations
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {courses.map((course, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow p-6"
          >

            <h3 className="text-xl font-bold">
              {course.skill}
            </h3>

            <p className="mt-2">
              <strong>Course:</strong> {course.course}
            </p>

            <p>
              <strong>Platform:</strong> {course.platform}
            </p>

            <p>
              <strong>Duration:</strong> {course.duration}
            </p>

            <p>
              <strong>Level:</strong> {course.level}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CourseSection;