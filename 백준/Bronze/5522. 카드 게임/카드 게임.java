import java.util.*;
import java.math.BigInteger;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
    BigInteger a = sc.nextBigInteger();
    BigInteger b = sc.nextBigInteger();
    BigInteger c = sc.nextBigInteger();
    BigInteger d = sc.nextBigInteger();
    BigInteger e = sc.nextBigInteger();
    BigInteger sum = a.add(b).add(c).add(d).add(e);

    System.out.println(sum);
	}
}