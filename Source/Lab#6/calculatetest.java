import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class calculatetest {

	calculate calculation = new calculate();
	int inches = calculation.sum(4);
	int testSum = 1;

	@Test
	public void testSum() {
		System.out.println("@Test sum(): " + inches+ " = " + testSum);
		assertEquals(inches, testSum);
	}

}