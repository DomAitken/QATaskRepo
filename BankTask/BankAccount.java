package BankTask;

public class BankAccount {

    private float balance = 0;
    private long accountNum;

    private BankAccount(long newAccountNum) {
        this.accountNum = newAccountNum;
    }

    /**
	 * @return the balance
	 */
	public float getBalance() {
		return balance;
	}


	/**
	 * @param balance the balance to set
	 */
	public void setBalance(float balance) {
		this.balance = balance;
	}


	/**
	 * @return the accountNum
	 */
	public long getAccountNum() {
		return accountNum;
	}


	/**
	 * @param accountNum the accountNum to set
	 */
	public void setAccountNum(long accountNum) {
		this.accountNum = accountNum;
	}


	public static BankAccount newBankAccount() {
        return new BankAccount(374386845);
    }

	public BankAccount(float balance, long accountNum) {
		super();
		this.balance = balance;
		this.accountNum = accountNum;
	}

    
    	
    
    
}