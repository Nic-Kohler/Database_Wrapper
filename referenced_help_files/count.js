function count_html()
{
	var html = 	"<div class='heading_font'>Count</div>" +
				"<div class='code_font bigger indent_1'>" +
					"Integer Count(String $sql)" +
				"</div>" +

				"<div class='heading_font'>Description</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Retrieves an integer count from the database based on a Sql 'Count' statement." +
				"</div>" +

				"<div class='heading_font'>Parameters</div>" +
				"<div class='code_font indent_1 bottom_space_1'>" +
					"sql_query" +
				"</div>" +
				"<div class='text_font indent_2 bottom_space_2'>" +
					"Sql Count Query of type String that counts data in the database." +
				"</div>" +

				"<div class='heading_font'>Return Value</div>" +
				"<div class='text_font indent_1 bottom_space_1'>Value: <span class='inline_code_font'>Integer</span> or <span class='inline_code_font'>NULL</span></div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"This function returns an Integer count corresponding to the Sql Count Query submitted. " +
					"If no data matches the submitted Sql Count Query, then NULL is returned." +
				"</div>" +

				"<div class='heading_font'>Example</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"<div class='bottom_space_1'><i>Given the following table:</i></div>" +
					"<span class='heading_font indent_1'>Table_1</span>" +

					"<table style='margin-left: 20px;'>" +
						"<tr>" +
							"<th>field_id</th>" +
							"<th>field_1</th> " +
							"<th>field_2</th> " +
							"<th>field_3</th> " +
						"</tr>" +
						"<tr>" +
							"<td>1</td>" +
							"<td>Text example one.</td>" +
							"<td>100</td>" +
							"<td>Apple</td>" +
						"</tr>" +
						"<tr>" +
							"<td>2</td>" +
							"<td>Text example two.</td>" +
							"<td>101</td>" +
							"<td>Orange</td>" +
						"</tr>" +
						"<tr>" +
							"<td>3</td>" +
							"<td>Text example three.</td>" +
							"<td>256</td>" +
							"<td>Pear</td>" +
						"</tr>" +
					"</table>" +
				"</div>" +

				"<div class='text_font indent_1 bottom_space_1'><i>Code:</i></div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"&lt;?php\n" +
						"\trequire_once(\"./your_folder/database.php\");\n\n" +
						"\t$my_database = new Database(); <i>//Configured using 'database.cfg'.</i>\n\n" +
						"\t$sql\t= \"SELECT COUNT(*) FROM Table_1;\";\n" +
						"\t$count\t= $my_database->Count($sql);\n\n" +
						"\tif($count)\n" +
							"\t\techo \"Record Count:\\t\" . $count . \"\\n\";\n" +
						"\telse\n" +
							"\t\techo \"No data retrieved from the database.\";\n" +
				"</div>" +
				
				"<div class='text_font indent_1 bottom_space_1'><i>Output:</i></div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"Record Count:\t3\n" +
				"</div>";

	return html;
}