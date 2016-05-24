package es.urjc.code.daw.codegaming.imageUploader;

public class Image {

	private String fileName;

	public Image(String fileName) {
		super();
		this.fileName = fileName;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	@Override
	public String toString() {
		return "Image [fileName=" + fileName + "]";
	}

}
