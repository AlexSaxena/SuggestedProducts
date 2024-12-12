using Microsoft.AspNetCore.Mvc;

namespace Products.Api.AddControllers;

[ApiController, Route("api/v1/[controller]")]

public class HelloController : ControllerBase
{
    
    [HttpGet]
    public string SayHello()=> "Hello";
}