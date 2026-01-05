using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.Serialization;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Student[]> Get()
        {
            try
            {
                Student[] students = DBStudentsMock.students.ToArray();
                return Ok(students);
            }
            catch (Exception e)
            {
                //return BadRequest(e);
                return StatusCode(StatusCodes.Status400BadRequest, e.Message);
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Get(int id)
        {

            try
            {
                Student stu2find = DBStudentsMock.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2find == null)
                {
                    return NotFound($"student with id={id} was not found in Get by ID!");
                }

                return Ok(stu2find);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Post([FromBody] Student value)
        {

            try
            {
                if (value == null)
                    return BadRequest();
                else if (value.Id != 0)
                    return StatusCode(StatusCodes.Status500InternalServerError);

                value.Id = DBStudentsMock.students.Max(stu => stu.Id) + 1;
                DBStudentsMock.students.Add(value);

                return CreatedAtAction(nameof(Get), new { id = value.Id} , value);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Put( int id, [FromBody] Student value)
        {
            try
            {
                if (value == null || id != value.Id)
                    return BadRequest();
                
                Student student2Update = DBStudentsMock.students.FirstOrDefault(stu => stu.Id == id);
                if (student2Update == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"stuendt with id ={id} was not found in Put!");
                }

                student2Update.Name = value.Name;
                student2Update.Grade = value.Grade;
                return NoContent();

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Delete(int id)
        {
            try
            {
                if (id == 0)
                    return BadRequest();

                Student student2Del = DBStudentsMock.students.FirstOrDefault(stu => stu.Id == id);
                if (student2Del == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"stuendt with id ={id} was not found in Del!");
                }

                DBStudentsMock.students.Remove(student2Del);
                return NoContent();

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
