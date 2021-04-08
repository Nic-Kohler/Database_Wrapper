function get_record_html()
{
	var html = 	"<div class='heading_font'>Get_Record</div>" +
				"<div class='code_font bigger indent_1'>" +
					"Array Get_Record(String $sql_query)" +
				"</div>" +

				"<div class='heading_font'>Description</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Retrieves a single dimensional, key-value pair array from the database." +
				"</div>" +

				"<div class='heading_font'>Parameters</div>" +
				"<div class='code_font indent_1 bottom_space_1'>" +
					"sql_query" +
				"</div>" +
				"<div class='text_font indent_2 bottom_space_2'>" +
					"Sql Query of type String that fetches data from the database." +
				"</div>" +

				"<div class='heading_font'>Return Value</div>" +
				"<div class='text_font indent_1 bottom_space_1'>Value: <span class='inline_code_font'>Array</span> or <span class='inline_code_font'>NULL</span></div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"This function returns a key-value pair array of data corresponding to the Sql Query submitted. " +
					"If no data matches the submitted Sql Query, i.e. The database returns an empty array, then NULL is returned instead of an empty array." +
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
						"\t$sql\t= \"SELECT * FROM Table_1 WHERE field_id = 1;\";\n" +
						"\t$result\t= $my_database->Get_Record($sql);\n\n" +
						"\tif($result)\n" +
						"\t{\n" +
							"\t\techo \"field_id:\\t\" . $result[\"field_id\"] . \"\\n\";\n" +
							"\t\techo \"field_1:\\t\" . $result[\"field_1\"] . \"\\n\";\n" +
							"\t\techo \"field_2:\\t\" . $result[\"field_2\"] . \"\\n\";\n" +
							"\t\techo \"field_3:\\t\" . $result[\"field_3\"] . \"\\n\";\n" +
						"\t}\n" +
						"\telse echo \"No data retrieved from the database.\";\n" +
				"</div>" +
				
				"<div class='text_font indent_1 bottom_space_1'><i>Output:</i></div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"field_id:\t1\n" +
					"field_1:\tText example one.\n" +
					"field_2:\t100\n" +
					"field_3:\tApple" +
				"</div>";

	return html;
}