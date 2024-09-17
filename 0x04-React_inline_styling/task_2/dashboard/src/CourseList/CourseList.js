import React from 'react';
import { CourseListRow } from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  all: {
    border: "3px solid grey",
    padding: 8,
    textAlign: "left"
  },
  table: {
    width: '80%',
    borderCollapse: 'collapse',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '30%'
  }
})

export function CourseList({ listCourses }) {
  return (
    <table className={css(styles.table)} id="CourseList">
      <thead className={css(styles.all)}>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody className={css(styles.all)}>
        {listCourses.length == 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={true} />
        ) : (
          listCourses.map((course) => (
            <CourseListRow textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
          ))
        )}
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
  listCourses: [],
}