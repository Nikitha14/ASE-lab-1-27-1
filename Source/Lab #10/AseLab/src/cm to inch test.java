

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
 
@Path("/ctoiservice")
public class CtoI {


	@GET
	@Produces("application/xml")
	public String convertCtoI() {
 
		Double inches;
		Double centimeters = 6.8;
		inches = (centimeters * 0.39) ;
 
		String result = "@Produces(\"application/xml\") Output: \n\nC to I Converter Output: \n\n" + inches;
		return "<ctoiservice>" + "<cm>" + centimeters + "</cm>" + "<ctoioutput>" + result + "</ctoioutput>" + "</ctoiservice>";
	}
 
	@Path("{m}")
	@GET
	@Produces("application/xml")
	public String convertCtoFfromInput(@PathParam("m") Double m) {
		Double inches;
		Double centimeters = m;
		inches = (centimeters *0.39);
 
		String result = "@Produces(\"application/xml\") Output: \n\nC to I Converter Output: \n\n" + inches;
		return "<ctoiservice>" + "<cm>" + centimeters + "</cm>" + "<ctoioutput>" + result + "</ctoioutput>" + "</ctoiservice>";
	}
}