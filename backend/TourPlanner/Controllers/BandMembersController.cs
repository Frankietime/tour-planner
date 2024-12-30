using backend.Services;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class BandMembersController : ControllerBase
{
    private readonly BandMemberService _bandMemberService;

    public BandMembersController(BandMemberService bandMemberService)
    {
        _bandMemberService = bandMemberService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<BandMember>> GetAllMembers()
    {
        var members = _bandMemberService.GetAllMembers();
        return Ok(members);
    }

    [HttpGet("{id}")]
    public ActionResult<BandMember> GetMemberById(string id)
    {
        var member = _bandMemberService.GetMemberById(id);
        if (member == null)
        {
            return NotFound();
        }
        return Ok(member);
    }

    [HttpPost]
    public ActionResult<BandMember> CreateMember([FromBody] BandMember member)
    {
        if (member == null)
        {
            return BadRequest();
        }
        _bandMemberService.AddMember(member);
        return CreatedAtAction(nameof(GetMemberById), new { id = member.Id }, member);
    }

    [HttpPut("{id}")]
    public ActionResult UpdateMember(string id, [FromBody] BandMember member)
    {
        if (member == null || member.Id != id)
        {
            return BadRequest();
        }
        var existingMember = _bandMemberService.GetMemberById(id);
        if (existingMember == null)
        {
            return NotFound();
        }
        _bandMemberService.UpdateMember(member);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteMember(string id)
    {
        var existingMember = _bandMemberService.GetMemberById(id);
        if (existingMember == null)
        {
            return NotFound();
        }
        _bandMemberService.RemoveMember(id);
        return NoContent();
    }
}