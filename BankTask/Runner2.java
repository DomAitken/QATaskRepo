package BankTask;

public class Runner2 {


	public static void main(String[] args) {
		BankAccount account = new BankAccount(2.5F, 437647364);
		

		account.setAccountNum(45846548);
		account.setBalance(230F);
		
		System.out.println(account.getBalance());
		
		System.out.println(account.getAccountNum());
	}

	
}
